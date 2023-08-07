package com.pranay.MyAuditApp.Service;

import com.pranay.MyAuditApp.Model.AuditApp;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


import java.util.List;


public interface AuditService {

    List<AuditApp> getAuditListForYearAndMonth(int year,String month);


    public void saveAudit(AuditApp audit);

    List<AuditApp> getAuditListByYear(int year);
}
