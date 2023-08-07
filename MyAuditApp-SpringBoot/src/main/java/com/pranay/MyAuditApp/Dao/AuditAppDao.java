package com.pranay.MyAuditApp.Dao;

import com.pranay.MyAuditApp.Model.AuditApp;
import com.pranay.MyAuditApp.Model.CompositeKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuditAppDao extends JpaRepository<AuditApp, CompositeKey> {
    @Query(value = "SELECT a FROM AuditApp a WHERE a.compositeKey.audityear= :audityear AND a.compositeKey.auditmonth= :auditmonth")
    List<AuditApp> findAuditbyYearAndMonth(@Param("audityear") int audityear,@Param("auditmonth") String auditmonth);
    @Query(value = "SELECT a FROM AuditApp a WHERE a.compositeKey.audityear= :audityear")
    List<AuditApp> findAuditListByYear(@Param("audityear") int year);
}
