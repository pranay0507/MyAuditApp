package com.pranay.MyAuditApp.Form;

public class LoginForm {

    public LoginForm(){}

    private String emailaddr;
    private String password;

    public String getEmailaddr() {
        return emailaddr;
    }

    public void setEmailaddr(String emailaddr) {
        this.emailaddr = emailaddr;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LoginForm(String emailaddr, String password) {
        this.emailaddr = emailaddr;
        this.password = password;
    }
}
