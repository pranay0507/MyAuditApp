package com.pranay.MyAuditApp.Service.Impl;

import com.pranay.MyAuditApp.Dao.AuditAppDao;
import com.pranay.MyAuditApp.Model.AuditApp;
import com.pranay.MyAuditApp.Service.AuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuditServiceImpl implements AuditService {
    @Autowired
    AuditAppDao auditAppDao;

    @Override
    public List<AuditApp> getAuditListForYearAndMonth(int year,String month) {
        return auditAppDao.findAuditbyYearAndMonth(year,month);
    }

    @Override
    public void saveAudit(AuditApp audit) {
        auditAppDao.save(audit);
    }

    @Override
    public List<AuditApp> getAuditListByYear(int year) {
        return auditAppDao.findAuditListByYear(year);
    }

}
