Java.perform(function () {
  Java.use("android.widget.TextView").setText.overload( 'java.lang.CharSequence').implementation=function (context){
    return this.setText(Java.use("java.lang.String").$new("FFFFFFF"));
  }
});
