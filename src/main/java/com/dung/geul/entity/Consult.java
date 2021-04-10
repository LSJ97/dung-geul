package com.dung.geul.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
@AttributeOverrides({
        @AttributeOverride(name = "regDate", column = @Column(name = "regdate")),
        @AttributeOverride(name = "modDate", column = @Column(name = "modDate"))
})
public class Consult extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cno_num;

    @Column(length = 50, nullable = false)
    private String Consult_field;

    @Column(length = 50, nullable = false)
    private String Consult_detail_field;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "applycant_user_id" ,foreignKey = @ForeignKey(name="applycant_user_id_fk"))
    private Member user_id;

}