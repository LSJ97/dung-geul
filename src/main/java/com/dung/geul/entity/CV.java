package com.dung.geul.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "cv")
public class CV  implements Serializable{

    @Id
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cv_user_id" ,foreignKey = @ForeignKey(name="cv_user_id_fk"))
    private Member user_id;

    private String user_name_chinese;

    private LocalDate brthdate;

    @Column(length = 1, nullable = false)
    private String cv_mil; // 병력사항 (군필, 미필, 면제)

    private String cv_mil_exemption;    //면제 사유

    private String cv_mil_os;  // 병과

    private String cv_mil_rank;  // 계급

    private String cv_mil_division; //군별

    private String cv_mil_date;     // 복무기간


    @Column(length = 1, nullable = false)
    private String cv_disability; //장애여부

    private String cv_disability_type;  // 장애 종류

    private String cv_disability_grade; // 장애 등급


    private String cv_fam_position;    // 가족사항(몇남 몇녀 중 몇째)

    private String cv_hobby;    // 취미

    private String cv_specialty;    // 특기

//  엑셀파일에 없어서 뺌
//    @Column(length = 1, nullable = false)
//    private String cv_carrer; //경력 여부 //경력사항 테이블이 있는데 경력여부 열이 필요한가?

//    @Column(length = 1, nullable = false)
//    private String cv_employment; //취업여부

//    @Column(length = 3, nullable = false)
//    private Long cv_grade; //대학 성적

//    @Column(length = 1, nullable = false)
//    private String cv_verteran; //보훈대상여부

//    @Column(length = 3, nullable = false)
//    private String cv_ad; // 계열학과


    //대학 성적 float ?? int??
    // 이력서에 등록일 수정일이 필요하려나 //

}
