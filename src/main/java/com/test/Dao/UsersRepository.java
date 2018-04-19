package com.test.Dao;

import com.test.User.KaoserFile;
import com.test.User.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users,String> {
    Users findByUsername(String name);
}
