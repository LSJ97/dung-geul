package com.dung.geul.service;


import com.dung.geul.dto.PageRequestDTO;
import com.dung.geul.dto.PageResultDTO;
import com.dung.geul.dto.Notice_boardDTO;
import com.dung.geul.entity.Board;
import com.dung.geul.entity.QBoard;
import com.dung.geul.repository.BoardRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.function.Function;

@Log4j2
@Service

@RequiredArgsConstructor
public class notice_boardServiceImpl implements notice_boardService {

    private final BoardRepository boardRepository;

    @Override
    public PageResultDTO<Notice_boardDTO, Board> getList(PageRequestDTO requestDTO) {

        Pageable pageable = requestDTO.getPageable(Sort.by("num").descending());     // 글 번호(num)를 기준으로 내림차순
//        Page<Board> result = boardRepository.findAll(pageable);

        BooleanBuilder booleanBuilder = getSearch(requestDTO);                       //검색 조건 처리
        Page<Board> result = boardRepository.findAll(booleanBuilder, pageable);      //Querydsl 사용

        Function<Board, Notice_boardDTO> fn = (entity -> entityToDto(entity));       // java util의 함수를 람다식으로 표현

        return new PageResultDTO<>(result, fn);
    }

    @Override
    public Notice_boardDTO read(Long num) { // 방명록의 조회 처리
        log.info("num :" + num);

        Optional<Board> result = boardRepository.findById(num);

        //isPresent() :저장된 값이 존재하면 true(entityToDto)를 반환하고, 값이 존재하지 않으면 false(null)를 반환함.
        return result.isPresent()? entityToDto(result.get()) : null;
    }

    @Override
    public Long register(Notice_boardDTO dto) {

        log.info("DTO------------------------");
        log.info(dto);

        Board entity = dtoToEntity(dto);

        log.info(entity);

        boardRepository.save(entity);

        return entity.getNum();
    }

//    @Override
//    public void modify(notice_boardDTO notice_boardDTO) {
//
//        Board board = dtoToEntity(notice_boardDTO);
//
//        boardRepository.save(board);
//
//    }

    @Override
    public void remove(Long num) {

        boardRepository.deleteById(num);

    }


    @Override
    public void modify(Notice_boardDTO dto) {

        //업데이트 하는 항목은 '제목', '내용'

        Optional<Board> result = boardRepository.findById(dto.getNum());

        if(result.isPresent()){

            Board entity = result.get();

            entity.changeTitle(dto.getTitle());
            entity.changeContent(dto.getContent());

            boardRepository.save(entity);

        }
    }

// 검색 처리 ----------------------------------------------------------------------------------

    private BooleanBuilder getSearch(PageRequestDTO requestDTO){    // 검색처리

        String type = requestDTO.getType();

        BooleanBuilder booleanBuilder = new BooleanBuilder();

        QBoard qBoard = QBoard.board1;

        String keyword = requestDTO.getKeyword();

        BooleanExpression expression = qBoard.num.gt(0L); // gno > 0 조건만 생성

        booleanBuilder.and(expression);

        if(type == null || type.trim().length() == 0){ //검색 조건이 없는 경우
            return booleanBuilder;
        }


        //검색 조건을 작성하기 (키워드)
        BooleanBuilder conditionBuilder = new BooleanBuilder();

        if(type.contains("t")){
            conditionBuilder.or(qBoard.board_title.contains(keyword));      // 제목
        }
        if(type.contains("c")){
            conditionBuilder.or(qBoard.content.contains(keyword));          // 내용
        }

//  공지사항 페이지는 관리자만이 작성함
//        if(type.contains("w")){
//            conditionBuilder.or(qBoard.b.contains(keyword));                // 작성자
//        }

        //모든 조건 통합
        booleanBuilder.and(conditionBuilder);

        return booleanBuilder;
    }

// -----------------------------------------------------------------------------------------

// 파일 첨부 ---------------------------------------------------------------------------------

//    @Transactional
//    public Long savePost(notice_boardDTO notice_boardDto) {
//        return boardRepository.save(BoardDto.toEntity()).getNum();
//    }
//
//    @Transactional
//    public notice_boardDTO getPost(Long num) {
//        Board board = boardRepository.findById(num).get();
//
//        notice_boardDTO boardDto = notice_boardDTO.builder()
//                    .num(board.getNum())
//                    .b(board.getB())
//                    .title(board.getBoard_title())
//                    .content(board.getContent())
//                    .fileId(board.getFileId())
//    //              .createdDate(board.getCreatedDate())
//                    .build();
//        return boardDto;
//    }



}