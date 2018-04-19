package com.test.Dao;

import com.test.User.RequirementModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RequiremenModelRepository extends MongoRepository<RequirementModel,String> {
}
