package com.pranay.MyAuditApp.Controller;

import com.pranay.MyAuditApp.Model.AuditApp;
import com.pranay.MyAuditApp.Service.AuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("myauditapp/home/")
public class MyAuditController {

    @Autowired
    AuditService auditService;
    @GetMapping("getaudityearmonth")
    public List<AuditApp> getAuditListForYearAndMonth(@RequestParam("audityear") String year,@RequestParam("auditmonth") String month){
        int audityear = Integer.parseInt(year);
        return auditService.getAuditListForYearAndMonth(audityear,month);
    }
    @GetMapping("getaudityear")
    public List<AuditApp> getAuditListByYear(@RequestParam("audityear") String year){
        int audityear = Integer.parseInt(year);
        return auditService.getAuditListByYear(audityear);
    }
    @PostMapping("addaudit")
    public void saveAudit(@RequestBody AuditApp audit){
        if(audit!=null){
            audit.setBalance(audit.getIncome()-(audit.getBills()+audit.getExpenses()+audit.getInsurance()+audit.getCreditbills()));
        }
        audit.setCreatetimestamp(new Date());
        auditService.saveAudit(audit);
    }

}
