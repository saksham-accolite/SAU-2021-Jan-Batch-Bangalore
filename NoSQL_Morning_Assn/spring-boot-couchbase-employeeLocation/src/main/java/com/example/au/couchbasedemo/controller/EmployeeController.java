package com.example.au.couchbasedemo.controller;

import java.util.List;
import java.util.Optional;

import com.example.au.couchbasedemo.model.Employee;
import com.example.au.couchbasedemo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    /*
     * @RequestMapping("/") public String index() { return
     * "Welcome to the CRUD application!!"; }
     */

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee newEmployee) {
        return employeeRepository.save(newEmployee);
    }

    @GetMapping("/employees/pincode/{pincodeId}")
    public List<Employee> getEmployeeByPincode(@PathVariable String pincodeId) {
        return employeeRepository.findByPincode(pincodeId);
    }

    @GetMapping("/employees/location/{locationStr}")
    public List<Employee> getEmployeeByLocation(@PathVariable String locationStr) {
        return employeeRepository.findByLocation(locationStr);
    }
}