import javafx.application.Application;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.fxml.FXMLLoader;

public class App extends Application {

  public static void main(String[] args) {
    launch(args);
  }

  @Override
  public void start(Stage stage) throws Exception {
    Parent root = FXMLLoader.load(getClass().getResource("App.fxml"));

    Scene appScene = new Scene(root);

    stage.setTitle("JMusic");
    stage.setScene(appScene);
    stage.show();
  }
}
