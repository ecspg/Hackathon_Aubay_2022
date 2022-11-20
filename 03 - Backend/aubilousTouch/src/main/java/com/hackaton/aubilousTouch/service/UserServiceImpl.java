package com.hackaton.aubilousTouch.service;

import com.hackaton.aubilousTouch.model.User;
import com.hackaton.aubilousTouch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean validate(User user) throws NoSuchAlgorithmException {
        //Creating the MessageDigest object
        MessageDigest md = MessageDigest.getInstance("SHA-512");

        //Passing data to the created MessageDigest Object
        md.update(user.getPassword().getBytes());

        //Compute the message digest
        byte[] digest = md.digest();
        System.out.println(digest);

        //Converting the byte array in to HexString format
        StringBuffer hexString = new StringBuffer();

        for (int i = 0;i<digest.length;i++) {
            hexString.append(Integer.toHexString(0xFF & digest[i]));
        }

//        List<User> users = userRepository.findByLoginAndPassword(user.getLogin(), "0x" + hexString.toString().toUpperCase());
        List<User> users = userRepository.findByLogin(user.getLogin());

        return users != null && !users.isEmpty();
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public List<User> findByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    @Override
    public List<User> findByLoginAndEmail(String login, String email) {
        return userRepository.findByLoginAndEmail(login, email);
    }

}
