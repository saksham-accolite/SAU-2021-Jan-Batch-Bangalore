package com.example.au.couchbasedemo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;

@Document
public class Employee {

	@Id
	private String empId;
	private String empName;
	private String pincode;
	private String location;

	public Employee(String empId, String empName, String pincode, String location) {
		this.empId = empId;
		this.empName = empName;
		this.pincode = pincode;
		this.location = location;
	}

	public String getEmpId() {
		return empId;
	}

	public String getEmpName() {
		return empName;
	}

	public String getPincode() {
		return pincode;
	}

	public String getLocation() {
		return location;
	}

	public void setEmpId(String empId) {
		this.empId = empId;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public void setPinCode(String pincode) {
		this.pincode = pincode;
	}

	public void setLocation(String location) {
		this.location = location;
	}
}
