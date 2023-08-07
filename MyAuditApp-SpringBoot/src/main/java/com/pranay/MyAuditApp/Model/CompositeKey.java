package com.pranay.MyAuditApp.Model;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class CompositeKey implements Serializable {
    private int audityear;

    private String auditmonth;
    private String createby;

    public CompositeKey(){};

    public int getAudityear() {
        return audityear;
    }

    public void setAudityear(int audityear) {
        this.audityear = audityear;
    }

    public String getAuditmonth() {
        return auditmonth;
    }

    public void setAuditmonth(String auditmonth) {
        this.auditmonth = auditmonth;
    }

    public String getCreateby() {
        return createby;
    }

    public void setCreateby(String createby) {
        this.createby = createby;
    }

    public CompositeKey(int audityear, String auditmonth, String createby) {
        this.audityear = audityear;
        this.auditmonth = auditmonth;
        this.createby = createby;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CompositeKey that)) return false;
        return getAudityear() == that.getAudityear() && Objects.equals(getAuditmonth(), that.getAuditmonth()) && Objects.equals(getCreateby(), that.getCreateby());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getAudityear(), getAuditmonth(), getCreateby());
    }
}
