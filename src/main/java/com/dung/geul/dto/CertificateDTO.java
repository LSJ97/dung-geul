package com.dung.geul.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CertificateDTO {

    private Long lic_num;
    private String lic_name;
    private LocalDate lic_date;         // 취득일
    private LocalDate lic_due_date;     // 만료일

    private LocalDateTime regDate;
    private String user_id;

}
