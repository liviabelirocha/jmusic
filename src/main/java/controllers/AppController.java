package controllers;

import com.jfoenix.controls.JFXButton;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.layout.Pane;

public class AppController {

  @FXML
  private JFXButton playlistButton;
  @FXML
  private JFXButton musicButton;
  @FXML
  private JFXButton exitButton;

  @FXML
  private Pane musicsPane;
  @FXML
  private Pane playlistsPane;

  @FXML
  void handlePaneChange(ActionEvent event) {
    Object source = event.getSource();

    handleNavigation(source);
  }

  private void handleNavigation(Object source) {
    if (source == playlistButton) {
      playlistsPane.toFront();
    } else if (source == musicButton) {
      musicsPane.toFront();
    } else if (source == exitButton) {
      System.exit(1);
    } else {
      musicsPane.toFront();
    }
  }

}
