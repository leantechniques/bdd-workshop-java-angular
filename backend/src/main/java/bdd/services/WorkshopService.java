package bdd.services;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class WorkshopService {

    public List<String> getStates() {
        return Arrays.asList("Illinois", "Iowa", "Minnesota", "Wisconsin", "Ohio", "Kansas");
    }
}
