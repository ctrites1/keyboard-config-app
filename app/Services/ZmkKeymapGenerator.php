<?php

namespace App\Services;
use Illuminate\Support\Facades\Log;

class ZmkKeymapGenerator
{
    public function generateDts(array $config): string
    {
        // TODO: implement logic to translate config array into a DTS string
        $dtsContent = "";
        $layers = $config['layers'] ?? [];

        $dtsContent .= "/ {\n";
        $dtsContent .= "    keymap {\n";
        $dtsContent .= "        compatible = \"zmk,keymap\";\n\n";

        foreach ($layers as $index => $layer) {
            $layerName = $layer['name'] ?? "layer_{$index}";
            $bindings = $layer['bindings'] ?? "";


            $dtsContent .= "        {$layerName} {\n";
            $dtsContent .= "            bindings = <\n";
            Log::info($dtsContent);

            foreach ($bindings as $row) {
                $dtsContent .= "                ";
                foreach ($row as $key) {
                    if ($key === null) {
                         $dtsContent .= "&trans      ";
                    } else {
                        $behavior = $key['behavior'] ?? '&trans';
                        $params = $key['params'] ?? [];
                        $bindingString = $behavior;
                        if (!empty($params)) {
                            $bindingString .= " " . implode(" ", $params);
                        }
                        $dtsContent .= str_pad($bindingString, 12);                    }
                    Log::info($dtsContent);
                }
                $dtsContent .= "\n";
            Log::info($dtsContent);
            }
                $dtsContent .= "            >;\n";
                $dtsContent .= "        };\n\n";
            Log::info($dtsContent);
        }

        $dtsContent .= "    };\n";
        $dtsContent .= "};\n";

            Log::info($dtsContent);
        return $dtsContent;
    }
}


