package com.pranay.MyAuditApp.Form;

public class LoginMessage {

    String message;
    boolean status;

    String firstname;

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public LoginMessage(String message, boolean status, String firstname) {
        this.message = message;
        this.status = status;
        this.firstname = firstname;

    }
}
