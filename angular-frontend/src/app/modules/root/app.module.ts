import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { TodoService } from "../../shared/service";
import { TodoListComponent } from "../todoList/todo-list.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
