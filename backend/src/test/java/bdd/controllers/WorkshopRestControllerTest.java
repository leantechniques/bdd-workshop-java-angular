package com.controllers;

import com.services.WorkshopService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class WorkshopRestControllerTest {

    private WorkshopController controller;
    private WorkshopService service;

    @Before
    public void Setup() {
        service = mock(WorkshopService.class);
        controller = new WorkshopController(service);
    }

    @Test
    public void purchaseProduct_ShouldCallVendingMachineControllerWithProduct() {
        var states = Arrays.asList("California", "Florida");
        when(service.getStates()).thenReturn(states);

        var actual = controller.getAllStates();

        verify(service, Mockito.times(1)).getStates();
        assertEquals(states, actual);
    }
}
