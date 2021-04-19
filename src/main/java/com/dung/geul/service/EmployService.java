package com.dung.geul.service;

import com.dung.geul.dto.EmployDTO;

import com.dung.geul.dto.PageRequestDTO;
import com.dung.geul.dto.PageResultDTO;
import com.dung.geul.entity.Employ;


public interface EmployService {

    PageResultDTO<EmployDTO, Employ> getList(PageRequestDTO pageRequestDTO);

    EmployDTO read(Long num);

    Long register(EmployDTO employDTO);

    void modify(EmployDTO employDTO);

    void remove(Long num);


    default Employ dtoToEntity(EmployDTO dto) {
        Employ entity = Employ.builder()
                .num(dto.getNum())
                .title(dto.getTitle())
                .content(dto.getContent())
                .ot(dto.getOt())
                .ep(dto.getEp())
                .start_date(dto.getStart_date())
                .end_date(dto.getEnd_date())
                .people(dto.getPeople())
                .career(dto.getCareer())
                .education(dto.getEducation())
                .salary(dto.getSalary())
                .area(dto.getArea())
                .apply(dto.getApply())
                .file(dto.getFile())
                .build();
        return entity;
    }


    default EmployDTO entityToDto(Employ entity){

        EmployDTO dto = EmployDTO.builder()
                .num(entity.getNum())
                .title(entity.getTitle())
                .content(entity.getContent())
                .ot(entity.getOt())
                .ep(entity.getEp())
                .start_date(entity.getStart_date())
                .end_date(entity.getEnd_date())
                .people(entity.getPeople())
                .career(entity.getCareer())
                .education(entity.getEducation())
                .salary(entity.getSalary())
                .area(entity.getArea())
                .apply(entity.getApply())
                .regDate(entity.getRegDate())
                .modDate(entity.getModDate())
                .file(entity.getFile())
                .build();

        return dto;
    }


}
