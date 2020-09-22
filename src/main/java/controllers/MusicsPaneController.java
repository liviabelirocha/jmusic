package controllers;

import com.jfoenix.controls.JFXButton;
import com.jfoenix.controls.JFXListCell;
import com.jfoenix.controls.JFXListView;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.geometry.Insets;
import javafx.scene.Node;
import javafx.scene.control.Label;
import javafx.scene.control.ListCell;
import javafx.scene.control.ListView;
import javafx.scene.layout.*;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

public class MusicsPaneController extends JFXListView<String> {

  LinkedHashMap<String, ObservableList<String>> musicsByStyle = new LinkedHashMap<>();

  @FXML
  private VBox musicsBox;

  @FXML
  private JFXButton addPlaylistButton;

  @FXML
  public void handleAddPlaylistButton(ActionEvent event) {

  }

  @FXML
  public void initialize() {
    double vBoxWidth = musicsBox.getPrefWidth();
    ObservableList<Node> musicBoxChildren = musicsBox.getChildren();

    musicsByStyle.put("Rock", FXCollections.observableArrayList("Bohemian Rhapsody", "Shine on Crazy Diamond"));
    musicsByStyle.put("Pop", FXCollections.observableArrayList("Shallow", "aaaaaa", "bbbbbb"));
    musicsByStyle.put("Emo", FXCollections.observableArrayList("Drown"));

    for (Map.Entry<String, ObservableList<String>> me : musicsByStyle.entrySet()) {
      ObservableList<String> musics = me.getValue();
      String musicType = me.getKey();

      Label musicTypeLabel = new Label();
      createStyleMusicLabel(musicTypeLabel, musicType, vBoxWidth);
      musicBoxChildren.add(musicTypeLabel);

      for (String music: musics) {
        JFXListCell<String> list = new JFXListCell<>();
        createCustomCell(list, music, vBoxWidth);
        musicBoxChildren.add(list);
      }

    }
  }

  void createStyleMusicLabel(Label musicLabel, String type, double width) {
    musicLabel.setText(type);
    musicLabel.setFont(Font.font(30));
    musicLabel.setTextFill(Color.WHITE);
    musicLabel.setPrefWidth(width);
    musicLabel.setPadding(new Insets(0, 0, 0, 5));
    musicLabel.setOpaqueInsets(new Insets(0, 0, 0, 10));
    musicLabel.setBorder(new Border(
      new BorderStroke(Color.WHITE, Color.WHITE, Color.WHITE, Color.WHITE, BorderStrokeStyle.NONE, BorderStrokeStyle.NONE, BorderStrokeStyle.NONE, BorderStrokeStyle.SOLID, CornerRadii.EMPTY, new BorderWidths(1), Insets.EMPTY)
    ));
  }

  void createCustomCell(JFXListCell<String> list, String title, double width) {
    list.setText(title);
    list.setFont(Font.font(20));
    list.setPrefHeight(50);
    list.setStyle("-fx-background-color: #383236; -fx-background-radius: 0 20px 0 20px");
    list.setTextFill(Color.WHITE);
    list.setOpaqueInsets(new Insets(5, 0, 0, 5));
    list.setPadding(new Insets(0, 0, 0, 20));
    list.setPrefWidth(width);
  }
}
