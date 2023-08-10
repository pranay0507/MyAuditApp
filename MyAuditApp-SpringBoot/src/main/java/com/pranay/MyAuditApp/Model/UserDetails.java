package com.pranay.MyAuditApp.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userid;
    private String firstname;
    private String lastname;
    private String emailaddr;
    private String password;

}
