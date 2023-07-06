package bdd.controllers;


import bdd.services.WorkshopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WorkshopController {


    private final WorkshopService service;

    @Autowired
    public WorkshopController(WorkshopService service) {
        this.service = service;
    }

    @GetMapping("/states")
    public List<String > getAllStates() {
        return service.getStates();
    }
}


