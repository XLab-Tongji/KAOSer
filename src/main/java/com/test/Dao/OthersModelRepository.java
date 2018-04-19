package com.test.Dao;

import com.test.User.OthersModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OthersModelRepository extends MongoRepository<OthersModel,String> {
}
