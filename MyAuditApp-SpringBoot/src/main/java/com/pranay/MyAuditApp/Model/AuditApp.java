package com.pranay.MyAuditApp.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
@Data
@Entity
public class AuditApp{

    @EmbeddedId
    private CompositeKey compositeKey;

    private int income;
    private int creditbills;
    private int bills;
    private int insurance;
    private int expenses;
    private int balance;
    private Date createtimestamp;
}
