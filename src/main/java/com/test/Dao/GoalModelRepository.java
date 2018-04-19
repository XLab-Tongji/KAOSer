package com.test.Dao;

import com.test.User.GoalModel;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface GoalModelRepository extends MongoRepository<GoalModel,String> {
    @Override
    GoalModel findOne(String s);

    @Override
    List<GoalModel> findAll();
}
