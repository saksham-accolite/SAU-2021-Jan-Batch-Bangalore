package com.example.au.couchbasedemo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.au.couchbasedemo.model.Player;
import com.example.au.couchbasedemo.repository.CricketRepository;

@RestController
public class CricketController {
    
    @Autowired
    CricketRepository cricketRepository;
    
	/*
	 * @RequestMapping("/") public String index() { return
	 * "Welcome to the CRUD application!!"; }
	 */
    
    @PostMapping("/cricket/player")
    public Player addPlayer(@RequestBody Player newPlayer) {
        return cricketRepository.save(newPlayer);
    }
    
    @GetMapping("/cricket/player/{id}")
    public Optional<Player> getPlayer(@PathVariable String id) {
        if (cricketRepository.existsById(id)) {
            return cricketRepository.findById(id);
        } else
            return Optional.empty();
    }

    @GetMapping("/cricket/player/name/{name}")
    public Optional<Player> getPlayerByName(@PathVariable String name) {
            return cricketRepository.findByName(name);
    }

    @GetMapping("/cricket/player/runs/{run}")
    public List<Player> getPlayerHavingMoreRunsThan(@PathVariable Integer run) {
        List<Player> players = (List<Player>) cricketRepository.findAll();
        List<Player> resPlayers = new ArrayList<Player>();

        for(int i = 0 ; i< players.size() ; i++) {
            if(players.get(i).getRuns() > run) {
                resPlayers.add(players.get(i));
            }
        }

        return resPlayers;
    }


}