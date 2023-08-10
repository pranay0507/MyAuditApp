package com.pranay.MyAuditApp.Service.Impl;

import com.pranay.MyAuditApp.Dao.UserDetailsDTO;
import com.pranay.MyAuditApp.Form.LoginForm;
import com.pranay.MyAuditApp.Form.LoginMessage;
import com.pranay.MyAuditApp.Model.UserDetails;
import com.pranay.MyAuditApp.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDetailsDTO userDetailsDTO;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public void saveUserDetails(UserDetails user) {
        String encryptPassword = this.passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptPassword);
        userDetailsDTO.save(user);
    }

    @Override
    public UserDetails findUserByEmail(String emailaddr){
        UserDetails user = null;
        try{
            user = userDetailsDTO.findByEmail(emailaddr);
        }catch(Exception e){
            return user;
        }
        return user;
    }

    @Override
    public LoginMessage loginUser(LoginForm loginForm) {

        UserDetails user = findUserByEmail(loginForm.getEmailaddr().toUpperCase());
        if(user!=null){
            String password = loginForm.getPassword();
            String encodedPassword = user.getPassword();
            Boolean isPasswordCorrect = passwordEncoder.matches(password,encodedPassword);
            if(isPasswordCorrect){
                Optional<UserDetails> userExists = userDetailsDTO.findUserByEmailAndPassword(loginForm.getEmailaddr().toUpperCase(),encodedPassword);
                if(userExists.isPresent()){
                    return new LoginMessage("Login Success",true);
                }else {
                    return new LoginMessage("Login Failed", false);
                }
            }else {
                return new LoginMessage("Password does not Match", false);
            }
        }else {
            return new LoginMessage("Email not exits", false);
        }
    }

}
