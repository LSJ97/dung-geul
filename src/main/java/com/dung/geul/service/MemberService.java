package com.dung.geul.service;

import com.dung.geul.dto.AllowMemberDTO;
import com.dung.geul.dto.EnterpriseDTO;
import com.dung.geul.dto.MemberDTO;
import com.dung.geul.entity.Enterprise;
import com.dung.geul.entity.Member;
import com.dung.geul.entity.MemberRole;

public interface MemberService {

    // 교내회원 회원가입을 위해 dto -> entity
    default Member MemberDtoToEntity(MemberDTO memberDTO, String pw){

        Member member = Member.builder()
                .user_id(memberDTO.getUser_id())
                .user_name(memberDTO.getUser_name())
                .user_pw(pw)
                .user_ph(memberDTO.getUser_ph())
                .user_postcode(memberDTO.getUser_postcode())
                .user_addr(memberDTO.getUser_addr())
                .user_addr_details(memberDTO.getUser_addr_details())
                .user_email(memberDTO.getUser_email())
                .build();

        String role = memberDTO.getRole();

        if(role != null) {
            this.AddRoleWithColumn(member, memberDTO, role);
        }

        System.out.println("save member : " + member.toString());


        return member;
    }


    // 기업회원 회원가입을 위해 dto -> entity
    default Enterprise EnterpriseDtoToEntity(EnterpriseDTO enterpriseDTO, Member member){

        // 기업 entity 객체 생성
        Enterprise enterprise = Enterprise.builder()
                .user_id(member)
                .etp_num(enterpriseDTO.getEtp_num())
                .etp_name(enterpriseDTO.getEtp_name())
                .etp_ceo_name(enterpriseDTO.getEtp_ceo_name())
                .etp_ph(enterpriseDTO.getEtp_ph())
                .etp_fx(enterpriseDTO.getEtp_fx())
                .etp_home(enterpriseDTO.getEtp_home())
                .etp_contents(enterpriseDTO.getEtp_contents())
                .etp_year(enterpriseDTO.getEtp_year())
                .etp_member(enterpriseDTO.getEtp_member())
                .etp_sector(enterpriseDTO.getEtp_sector())
                .etp_shape(enterpriseDTO.getEtp_shape())
                .build();

        return enterprise;
    }


    // 회원에 따라 권한 및 관련 속성 추가
    default void AddRoleWithColumn(Member member, MemberDTO memberDTO, String role){

        member.addMemberRole(MemberRole.USER);
        member.modUser_type(role);

        if (role.equals("STUDENT") || role.equals("STAFF")) {
            member.modUser_dept(memberDTO.getUser_dept());
            member.modUser_grade(memberDTO.getUser_grade());
            member.modUser_class(memberDTO.getUser_class());

            member.addMemberRole(MemberRole.STUDENT);

        } else if (role.equals("MENTO")) {
            member.modUser_job(member.getUser_job());


            member.addMemberRole(MemberRole.MENTO);

        } else if (role.equals("COUNSELOR")) {

            member.addMemberRole(MemberRole.COUNSELOR);

        }
        //기업은 지금 받지 않음
    }

    // 기업 인증 목록
    default AllowMemberDTO AllowEntityToDTO(Member member, Enterprise enterprise){
        AllowMemberDTO allowMemberDTO = AllowMemberDTO.builder()
                .user_id(member.getUser_id())
                .etp_name(enterprise.getEtp_name())
                .etp_num(enterprise.getEtp_num())
                .user_regdate(member.getRegDate())
                .build();

        return allowMemberDTO;
    }

    default EnterpriseDTO entityToDto(Enterprise e, Member m){

        EnterpriseDTO dto = EnterpriseDTO.builder()
                .user_id(m.getUser_id())
                .user_name(m.getUser_name())
                .user_postcode(m.getUser_postcode())
                .user_addr(m.getUser_addr())
                .user_addr_details(m.getUser_addr_details())
                .user_email(m.getUser_email())
                .user_ph(m.getUser_ph())
                .etp_num(e.getEtp_num())
                .etp_name(e.getEtp_name())
                .etp_ceo_name(e.getEtp_ceo_name())
                .etp_member(e.getEtp_member())
                .etp_home(e.getEtp_home())
                .etp_sector(e.getEtp_sector())
                .etp_shape(e.getEtp_shape())
                .etp_contents(e.getEtp_contents())
                .etp_fx(e.getEtp_fx())
                .etp_year(e.getEtp_year())
                .build();

        return dto;
    }


}
