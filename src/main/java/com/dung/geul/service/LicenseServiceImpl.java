package com.dung.geul.service;

import com.dung.geul.dto.CertificateDTO;
import com.dung.geul.dto.PageRequestDTO;
import com.dung.geul.dto.PageResultDTO;
import com.dung.geul.entity.License;
import com.dung.geul.entity.Member;
import com.dung.geul.entity.QLicense;
import com.dung.geul.repository.LicenseRepository;
import com.dung.geul.repository.MemberRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Log4j2
@Service
public class LicenseServiceImpl implements LicenseService{

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private LicenseRepository licenseRepository;

    @Override
    public PageResultDTO<CertificateDTO, License> getLicensePage(String user_id, PageRequestDTO pageRequestDTO) {

        Member member = memberRepository.getOne(user_id);

        log.info("license service - member : " + member);

        Pageable pageable = pageRequestDTO.getPageable(Sort.by("licNum").descending());

        log.info("license service - pageable : " + pageable);

        // 조건 생성 (회원)
        BooleanBuilder builder = new BooleanBuilder();

        QLicense qLicense = QLicense.license;

        BooleanExpression epMember = qLicense.member.user_id.eq(user_id);

        builder.and(epMember);
        // 조건 생성 끝

        log.info("license service - builder : " + builder);

        Page<License> licensePage = licenseRepository.findByMember(member, pageable);

        log.info("license service - license List : " + licensePage.getContent() );

        Function<License, CertificateDTO> fn = (entity -> entityToDto(entity));

        return new PageResultDTO<>(licensePage, fn);
    }

    @Override
    public void register(CertificateDTO certificateDTO) {

        String userId = certificateDTO.getUser_id();

        log.info("user ID : " + userId);

        Member member = memberRepository.getOne(userId);

        License license = dtoToEntity(certificateDTO, member);

        licenseRepository.save(license);

    }

    @Override
    public CertificateDTO getCertificateDTO(Long lic_num) {

        License entity = licenseRepository.getOne(lic_num);

        CertificateDTO dto = entityToDto(entity);

        return dto;

    }

    @Override
    public void modifyLicense(CertificateDTO certificateDTO) {

        License license = licenseRepository.getOne(certificateDTO.getLic_num());

        license.modLicName(certificateDTO.getLic_name());
        license.modLicDate(certificateDTO.getLic_date());
        license.modLicDueDate(certificateDTO.getLic_due_date());

        licenseRepository.save(license);
    }

    @Override
    public void deleteLicense(Long lic_num) {

        licenseRepository.deleteById(lic_num);

    }
}