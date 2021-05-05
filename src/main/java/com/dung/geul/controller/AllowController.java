package com.dung.geul.controller;

import com.dung.geul.dto.AllowEtpDTO;
import com.dung.geul.dto.EnterpriseDTO;
import com.dung.geul.dto.PageRequestDTO;
import com.dung.geul.dto.PageResultDTO;
import com.dung.geul.entity.Enterprise;
import com.dung.geul.entity.Member;
import com.dung.geul.service.MemberServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@RequestMapping("/admin")
@Controller
public class AllowController {

    @Autowired
    private MemberServiceImpl memberService;

    // 전체 회원 인증 전 리스트
    @GetMapping("/admin")
    public void getList(@RequestParam("type") String type ,@RequestParam("page1") int page1, @RequestParam("page2") int page2, Model model){
        //파라미터로 page, size 를 전달하면 자동으로 pageRequestDTO 객체로 수집된다

        // type : USER / ENTERPRISE / STUDENT / STAFF / COUNSELOR
        System.out.println("page1 : " + page1 +"\n" +
                "page2 : " + page2);
        System.out.println("list 컨트롤러 실행");

        System.out.println("type : " + type );

        if(type==null || type.equals("")){
            type = "USER";
        }

        // allow = 0 : 미인증 목록
        // allow = 1 : 인증 목록
        List<AllowEtpDTO> notAllowList = memberService.getNotAllowUserList(page1, type, 0).getDtoList();
        List<AllowEtpDTO> AllowList = memberService.getNotAllowUserList(page2, type, 1).getDtoList();

        model.addAttribute("notAllowList", notAllowList);
        model.addAttribute("allowList", AllowList);

        System.out.println(notAllowList.toString());
        System.out.println(AllowList.toString());

    }


        @GetMapping("/member/read")
    public EnterpriseDTO read(@RequestParam("user_id") String user_id){

        return memberService.getEnterprise(user_id);
    }
}
