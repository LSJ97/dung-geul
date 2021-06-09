package com.dung.geul.repository;

import com.dung.geul.entity.CV;
import com.dung.geul.entity.Consulting;
import com.dung.geul.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ConsultingRepository extends JpaRepository<Consulting,Long> {

    @Query("select c from Consulting c where c.user_id = :user_id")
    Optional<Consulting> findByUser_id(@Param("user_id") Member user_id);
}
