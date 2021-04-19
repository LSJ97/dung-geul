package com.dung.geul.controller.restcontroller;

import com.dung.geul.dto.EnterpriseDTO;
import com.dung.geul.entity.Enterprise;
import com.dung.geul.entity.Member;
import com.dung.geul.repository.EnterpriseRepository;
import com.dung.geul.repository.MemberRepository;
import com.dung.geul.service.MemberServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/allow")
public class AllowRestController {   // 권한 관리 컨트롤러

    @Autowired
    MemberServiceImpl memberService;


    // 기업 인증 승인 해줄 때
    @PostMapping("/etp/allow")
    public int etpAuth(@RequestBody EnterpriseDTO enterpriseDTO){
        System.out.println(" : " + enterpriseDTO.toString());
        System.out.println("enterpriseDTO : " + enterpriseDTO.toString());

        return memberService.authEnterprise(enterpriseDTO);
    }
}
