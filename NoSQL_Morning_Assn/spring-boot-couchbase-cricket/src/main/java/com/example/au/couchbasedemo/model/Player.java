package com.example.au.couchbasedemo.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;
import org.springframework.data.couchbase.core.mapping.Field;

import com.sun.istack.NotNull;

@Document
public class Player {
    
    @Id
    String id;
    
    @NotNull
    @Field
    String name;

	@NotNull
	@Field
	Integer wickets;

	@NotNull
	@Field
	Integer runs;

	@NotNull
	@Field
	Double average;

	public Player(String id, String name, Integer wickets, Integer runs, Double average) {
		this.id = id;
		this.name = name;
		this.wickets = wickets;
		this.runs = runs;
		this.average = average;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getWickets() {
		return wickets;
	}

	public void setWickets(Integer wickets) {
		this.wickets = wickets;
	}

	public Integer getRuns() {
		return runs;
	}

	public void setRuns(Integer runs) {
		this.runs = runs;
	}

	public Double getAverage() {
		return average;
	}

	public void setAverage(Double average) {
		this.average = average;
	}
}
