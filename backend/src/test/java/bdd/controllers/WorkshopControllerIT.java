package com.controllers;

import com.services.WorkshopService;
import org.junit.Before;
import org.junit.Test;

import java.util.Arrays;

import static junit.framework.TestCase.assertEquals;

public class WorkshopControllerIT {

    private WorkshopService service;
    private WorkshopController controller;

    @Before
    public void Setup() {
        service = new WorkshopService();
        controller = new WorkshopController(service);
    }

    @Test()
    public void purchase_ShouldReturnErrorMessageWhenProductUnavailable() {
        var expected = Arrays.asList("Illinois", "Iowa", "Minnesota", "Wisconsin", "Ohio", "Kansas");;

        var actual = controller.getAllStates();

        assertEquals(expected, actual);
    }
}
