package com.felipeos.dspesquisa.resources;

import java.util.List;

import com.felipeos.dspesquisa.dto.GameDTO;
import com.felipeos.dspesquisa.services.GameService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/games")
public class GameResource {

    @Autowired
    private GameService gameservice;

    @GetMapping
    public ResponseEntity<List<GameDTO>> findAll() {
        List<GameDTO> list = gameservice.findAll();
        return ResponseEntity.ok().body(list);
    }
}
