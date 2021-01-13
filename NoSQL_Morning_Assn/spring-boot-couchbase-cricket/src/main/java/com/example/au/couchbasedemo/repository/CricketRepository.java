package com.example.au.couchbasedemo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.au.couchbasedemo.model.Player;

public interface CricketRepository extends CrudRepository<Player, String> {

	Optional<Player> findByName(String name);
	Optional<Player> findById(String id);
	boolean existsByName(String name);
	List<Player> findAll();
}