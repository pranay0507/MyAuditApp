package com.pranay.MyAuditApp.Service;


import com.pranay.MyAuditApp.Form.LoginForm;
import com.pranay.MyAuditApp.Form.LoginMessage;
import com.pranay.MyAuditApp.Model.UserDetails;

import java.util.Optional;

public interface UserService {
    void saveUserDetails(UserDetails user);

    UserDetails findUserByEmail(String emailaddr);

    LoginMessage loginUser(LoginForm loginForm);
}
