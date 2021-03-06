package com.dung.geul.repository;

import com.dung.geul.entity.Member;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, String> {

    // fetchType.LAZY 로 관계된 엔티티를 findById를 하면 달려있는 MemberRole만큼 select 쿼리를 날린다
    // 이 어노테이션으로 붙이면 한번의 fetch join 쿼리만 실행한다 (함께 패치해 오기 때문에)
    @EntityGraph(attributePaths = {"roleSet"}, type = EntityGraph.EntityGraphType.LOAD)
    @Query("select m from Member m where m.user_id = :user_id")
    Optional<Member> findByIdWidthRole(@Param("user_id") String user_id);

    // 아이디 체크 ( return값이 1 : 아이디 있음(중복), 0 : 아이디 없음(중복아님) )
    @Query("select count(m.user_id) from Member m where m.user_id = :user_id")
    int checkId(@Param("user_id") String user_id);

    // findBy : 규칙, Email : 문법 => select * from member where email = ?
    // ? 자리엔 파라미터로 넘어온 user_email이 들어감

    //이메일 체크
    @Query("select m from Member m where m.user_email = :user_email")
    Optional<Member> findByUser_email(@Param("user_email") String user_email);

    // 이메일과 이름을 받아서 DB에 값이 있는지 확인
    @Query("select m.user_id from Member m where m.user_email = :user_email and m.user_emailDomain = :user_emailDomain and m.user_name = :user_name")
    String findByUser_emailAndUser_name(@Param("user_email") String user_email, @Param("user_emailDomain") String user_emailDomain, @Param("user_name") String user_name);

    @Query("select m.user_id from Member m where m.user_name = :name and m.user_ph = :ph and m.user_ph2 = :ph2 and m.user_ph3 = :ph3")
    String findByIdAndPh(@Param("name") String name, @Param("ph") String ph, @Param("ph2") String ph2, @Param("ph3") String ph3);

    //
    @Query(value = "select m, e from Member m , Enterprise e where e.member = m and m.user_id = :user_id")
    Object findByUser_idEtpJoinMember(@Param("user_id") String user_id);

    @Query("select m from Member m where m.user_type = :user_type and m.user_allow = 1")
    Member[] findByUser_type(@Param("user_type") String user_type);
}
