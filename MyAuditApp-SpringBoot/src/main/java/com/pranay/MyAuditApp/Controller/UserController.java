package com.pranay.MyAuditApp.Controller;

import com.pranay.MyAuditApp.Form.LoginForm;
import com.pranay.MyAuditApp.Form.LoginMessage;
import com.pranay.MyAuditApp.Model.UserDetails;
import com.pranay.MyAuditApp.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("myauditapp/")
public class UserController {

    @Autowired
    private UserService userservice;

    @PostMapping("login")
    public ResponseEntity<?> loginUser(@RequestBody LoginForm loginForm){
           LoginMessage loginReponse = userservice.loginUser(loginForm);
           return ResponseEntity.ok(loginReponse);
    }


    @PostMapping("register")
    public void saveUser(@RequestBody  UserDetails user) throws Exception {
        UserDetails userExists = userservice.findUserByEmail(user.getEmailaddr().toUpperCase());
       if(userExists==null) {
           userservice.saveUserDetails(user);
       }else{
           throw new Exception("EmailAddress is already taken!");
       }
    }

}
