import { FC, useState } from 'react';
import AceEditor from 'react-ace'
import { ECodeEditorThems, ICodeEditorProps } from './types';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-terminal";
import { CodeEditorTools } from 'components/molecules';


const CodeEditor: FC<ICodeEditorProps> = ({
    readOnly = false,
    tools = false,
    code = '',
    onChange,
    height = '500px',
}) => {
    const [theme, setTheme] = useState<ECodeEditorThems>(ECodeEditorThems.Twilight)
    const changeHandler = (code: string) => {
        if(onChange) { onChange(code) }
    }
    const themeChangeHandler = (newTheme: ECodeEditorThems) => {
        setTheme(newTheme)
    }
    return (
        <div>
            {tools && (
                <CodeEditorTools
                    themeValue={theme}
                    onThemeChange={themeChangeHandler} 
                />
            )}
            <AceEditor
                name="code_editor"
                mode="javascript"
                theme={theme} 
                width="100%"
                setOptions={{enableBasicAutocompletion: true}}
                height={height}
                fontSize={16}
                wrapEnabled
                enableBasicAutocompletion
                enableLiveAutocompletion
                enableSnippets
                readOnly={readOnly}
                value={code}
                onChange={changeHandler}
            />
        </div>
    )
}

export { CodeEditor }