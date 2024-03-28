package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.model.Login;
import com.codewitharjun.fullstackbackend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.remoting.httpinvoker.HttpInvokerRequestExecutor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    @Autowired
    private LoginRepository loginRepository;
    @GetMapping("/login/{username}")
    public ResponseEntity<Login> loginDetails(@PathVariable("username") String username){
        Login login=loginRepository.findByUsername(username);
        return new ResponseEntity<>(login, HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<Login> loginDetails(@RequestBody Login login){
        Login login1=loginRepository.save(new Login(login.getUsername(),login.getPass()));
        return new ResponseEntity<>(login1, HttpStatus.OK);
    }
}
