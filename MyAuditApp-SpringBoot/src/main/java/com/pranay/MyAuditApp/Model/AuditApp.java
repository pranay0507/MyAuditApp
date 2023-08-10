package com.pranay.MyAuditApp.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
@Data
@Entity
public class AuditApp{

    @EmbeddedId
    private CompositeKey compositeKey;

    private double income;
    private double creditbills;
    private double bills;
    private double insurance;
    private double expenses;
    private double balance;
    private Date createtimestamp;
}
