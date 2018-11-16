import processing.core.*; 
import processing.xml.*; 

import java.applet.*; 
import java.awt.*; 
import java.awt.image.*; 
import java.awt.event.*; 
import java.io.*; 
import java.net.*; 
import java.text.*; 
import java.util.*; 
import java.util.zip.*; 
import java.util.regex.*; 

public class basic_example extends PApplet {

// Global variables
float radius = 50.0f;
int X, Y;
int nX, nY;
int delay = 16;

// Setup the Processing Canvas
public void setup(){
  size( 200, 200 );
  smooth();
  strokeWeight( 10 );
  frameRate( 15 );
  X = width / 2;
  Y = width / 2;
  nX = X;
  nY = Y;
}

// Main draw loop
public void draw(){
  
  radius = radius + sin( frameCount / 4);
  
  // Track circle to new destination
  X+=(nX-X)/delay;
  Y+=(nY-Y)/delay;
  
  // Fill canvas grey
  background( 100 );
  
  // Set fill-color to blue
  fill( 0, 121, 184 );
  
  // Set stroke-color white
  stroke(255);
  
  // Draw circle
  ellipse( X, Y, radius, radius );
}

// Set circle's next destination
public void mouseMoved(){
  nX = mouseX;
  nY = mouseY;  
}

  static public void main(String args[]) {
    PApplet.main(new String[] { "--bgcolor=#ECE9D8", "basic_example" });
  }
}
