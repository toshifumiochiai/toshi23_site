package net.toshi23.fingerhop;

import android.app.Activity;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class fingerhopActivity extends Activity {
	WebView webView;
	
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        
        
        //Viewの設定
        webView = new WebView(this);

    	webView.getSettings().setPluginsEnabled(true);
    	webView.getSettings().setJavaScriptEnabled(true);
    	
    	webView.setHorizontalScrollBarEnabled(false);
    	webView.setVerticalScrollBarEnabled(false);
    	webView.setFocusable(false);

    	//Chromeのイベントを取得可能にする(アラートetc)
    	webView.setWebChromeClient(new ChromeClient());

        setContentView(webView);
   	
        //html読み込み
    	String url="file:///android_asset/index.html";
    	webView.loadUrl(url);
    	
    	getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
    }
    
    public final class ChromeClient extends WebChromeClient {
    	public boolean onJsAlert(WebView view, String message, JsResult result) {
    		android.util.Log.e("", message);
    		result.confirm();
    		
    		return true;
    	}
    }
}