package com.felipeos.dspesquisa.resources;

import com.felipeos.dspesquisa.dto.RecordDTO;
import com.felipeos.dspesquisa.dto.RecordInsertDTO;
import com.felipeos.dspesquisa.services.RecordService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/records")
public class RecordResource {
    @Autowired
    private RecordService service;

    @PostMapping
    public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto) {
        RecordDTO newDto = service.insert(dto);
        return ResponseEntity.ok().body(newDto);
    }
}
