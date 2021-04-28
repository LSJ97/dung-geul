package com.dung.geul.controller;

import com.dung.geul.dto.EnterpriseDTO;
import com.dung.geul.dto.PageRequestDTO;
import com.dung.geul.dto.PageResultDTO;
import com.dung.geul.entity.Enterprise;
import com.dung.geul.entity.Member;
import com.dung.geul.service.MemberServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RequestMapping("/allow")
@Controller
public class AllowController {

    @Autowired
    private MemberServiceImpl memberService;

    // 기업 인증 전 리스트
    @GetMapping("/member/list")
    public void getList(PageRequestDTO pageRequestDTO, Model model){
        //파라미터로 page, size 를 전달하면 자동으로 pageRequestDTO 객체로 수집된다

        System.out.println("list 컨트롤러 실행");

        model.addAttribute("list", memberService.getListEtp(pageRequestDTO));

    }

    @GetMapping("/member/read")
    public void read(@RequestParam("user_id") String user_id, Model model){

        EnterpriseDTO etpDTO = memberService.getEnterprise(user_id);

        model.addAttribute("etp", etpDTO);
    }
}