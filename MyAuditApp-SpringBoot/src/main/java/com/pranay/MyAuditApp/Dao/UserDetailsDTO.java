package com.pranay.MyAuditApp.Dao;

import com.pranay.MyAuditApp.Form.LoginForm;
import com.pranay.MyAuditApp.Model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDetailsDTO extends JpaRepository<UserDetails, Integer> {
    @Query(value = "SELECT u FROM UserDetails u WHERE UPPER(u.emailaddr) = :emailaddr AND u.password= :password")
    Optional<UserDetails> findUserByEmailAndPassword(@Param("emailaddr") String emailaddr, @Param("password") String password);

    @Query(value = "SELECT u FROM UserDetails u WHERE UPPER(u.emailaddr) = :emailaddr")
    public UserDetails findByEmail(@Param("emailaddr") String emailaddr);

}
