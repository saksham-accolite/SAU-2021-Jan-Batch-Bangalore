package com.example.au.couchbasedemo.repository;

import java.util.List;

import com.example.au.couchbasedemo.model.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, String> {

    List<Employee> findByPincode(String pincode);

    List<Employee> findByLocation(String location);


}