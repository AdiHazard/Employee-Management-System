package com.codewitharjun.fullstackbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="login")
public class Login {
    @Column(name="username")
    @Id
    private String username;
    @Column(name="password")
    private String pass;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Login() {
    }

    public String getPass() {
        return pass;
    }

    public Login(String username, String pass) {
        this.username = username;
        this.pass = pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}
